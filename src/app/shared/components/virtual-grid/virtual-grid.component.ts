import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { DOCUMENT, NgFor } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    input,
    ViewChild,
} from '@angular/core';
import { SystemElement } from 'app/shared/types/system-element.type';
import { CellContainerComponent } from '../cell-container/cell-container.component';

@Component({
    selector: 'bm-virtual-grid',
    templateUrl: './virtual-grid.component.html',
    styleUrls: ['./virtual-grid.component.scss'],
    imports: [DragDropModule, NgFor, CellContainerComponent],
})
export class VirtualGridComponent implements AfterViewInit {
    @ViewChild('desktopContainer', { static: true })
    desktopContainer!: ElementRef;

    layout = input<SystemElement[]>([]);

    cols = 12;
    rowHeight = 100;

    private cdr = inject(ChangeDetectorRef);
    public document: Document = inject(DOCUMENT);

    trackById(index: number, item: SystemElement): string {
        return item.id;
    }

    ngAfterViewInit(): void {
        this.initializeGrid();
    }

    private initializeGrid(): void {
        const containerWidth = this.desktopContainer.nativeElement.clientWidth;
        const cellWidth = containerWidth / this.cols;
        this.reorganizeGrid(cellWidth, this.rowHeight);
        this.cdr.detectChanges();
    }

    onDragEnded(event: CdkDragEnd, item: SystemElement): void {
        const containerWidth = this.desktopContainer.nativeElement.clientWidth;
        const cellWidth = containerWidth / this.cols;
        const cellHeight = this.rowHeight;

        const { x, y } = event.source.getFreeDragPosition();
        const snappedX = Math.round(x / cellWidth) * cellWidth;
        const snappedY = Math.round(y / cellHeight) * cellHeight;

        const collision = this.layout().some(
            (other) =>
                other.id !== item.id &&
                this.isOverlapping(
                    snappedX,
                    snappedY,
                    item.w || 1,
                    item.h || 1,
                    other
                )
        );

        if (collision) {
            item.x = snappedX;
            item.y = snappedY;
            this.reorganizeGrid(cellWidth, cellHeight);
        } else {
            item.x = snappedX;
            item.y = snappedY;
            event.source.reset();
            event.source.element.nativeElement.style.transform = `translate3d(${snappedX}px, ${snappedY}px, 0)`;
        }
        this.cdr.detectChanges();
    }

    private isOverlapping(
        x: number,
        y: number,
        w: number,
        h: number,
        other: SystemElement
    ): boolean {
        const otherX = other.x;
        const otherY = other.y;
        const otherW = other.w || 1;
        const otherH = other.h || 1;
        return !(
            x +
                w *
                    (this.desktopContainer.nativeElement.clientWidth /
                        this.cols) <=
                otherX ||
            otherX +
                otherW *
                    (this.desktopContainer.nativeElement.clientWidth /
                        this.cols) <=
                x ||
            y + h * this.rowHeight <= otherY ||
            otherY + otherH * this.rowHeight <= y
        );
    }

    private reorganizeGrid(cellWidth: number, cellHeight: number): void {
        const containerHeight =
            this.desktopContainer.nativeElement.clientHeight;
        const numRows = Math.max(Math.floor(containerHeight / cellHeight), 1);

        const occupancy: boolean[][] = [];
        for (let row = 0; row < numRows; row++) {
            occupancy[row] = new Array(this.cols).fill(false);
        }

        const sorted = [...this.layout()].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        sorted.forEach((elem) => {
            const w = elem.w || 1;
            const h = elem.h || 1;
            let placed = false;

            for (let col = 0; col < this.cols && !placed; col++) {
                for (let row = 0; row < numRows && !placed; row++) {
                    if (col + w <= this.cols && row + h <= numRows) {
                        let canPlace = true;
                        for (let r = row; r < row + h && canPlace; r++) {
                            for (let c = col; c < col + w; c++) {
                                if (occupancy[r][c]) {
                                    canPlace = false;
                                    break;
                                }
                            }
                        }
                        if (canPlace) {
                            elem.x = col * cellWidth;
                            elem.y = row * cellHeight;
                            for (let r = row; r < row + h; r++) {
                                for (let c = col; c < col + w; c++) {
                                    occupancy[r][c] = true;
                                }
                            }
                            placed = true;
                        }
                    }
                }
            }
        });
    }
}
