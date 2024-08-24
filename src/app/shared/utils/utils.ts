import { MatDialogConfig } from "@angular/material/dialog";

/**
 * Removes and item from an array. Returns a new array instance (it doesn't mutate the source array).
 * @param array source array to be returned without the element to remove
 * @param condition function that will return true for the item that we want to remove
 */
export function ktdArrayRemoveElement<T>(
  array: T[],
  condition: (item: T) => boolean,
) {
  const arrayCopy = [...array];
  const index = array.findIndex((item) => condition(item));
  if (index > -1) {
    arrayCopy.splice(index, 1);
  }
  return arrayCopy;
}



export function maxZIndex(selectors: string = 'body *'): number {
  return Array.from(document.querySelectorAll(selectors))
    .map(a => parseFloat(window.getComputedStyle(a).zIndex))
    .filter(a => !isNaN(a))
    .sort((a, b) => a - b)
    .pop() || 0;
}

export const MEDIUM_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '800px',
  height: '600px',
  panelClass: 'medium-container',
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false,
}

export const FOLDER_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '800px',
  height: '600px',
  panelClass: 'window-container',
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false
}

export const NOTION_DIALOG_CONFIG: MatDialogConfig = {
  maxWidth: '100vw',
  maxHeight: 'calc(100vh - 3rem)', //tasksbar height
  width: '1000px',
  height: '600px',
  panelClass: 'notion-container',
  hasBackdrop: false,
  autoFocus: true,
  restoreFocus: false
}



export const NOTION_TEST_PAGE_DATA = {
  "3316869a-d425-492c-9024-bc3ceb62e3bb": {
    "value": {
      "id": "3316869a-d425-492c-9024-bc3ceb62e3bb",
      "version": 209,
      "type": "page",
      "properties": {
        "Wfxa": [
          [
            "más contenido"
          ]
        ],
        "\\<eW": [
          [
            "To do"
          ]
        ],
        "{2o?": [
          [
            "Tag1,Tag2"
          ]
        ],
        "{Nt5": [
          [
            "‣",
            [
              [
                "p",
                "b7698555-c746-4e80-9fa3-d5c59a93e595",
                "733a82c1-3e5b-4df0-b66d-79919f319360"
              ]
            ]
          ]
        ],
        "title": [
          [
            "Notion elements"
          ]
        ]
      },
      "content": [
        "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
        "b4ee41d0-0ccd-44f2-bbb9-227ed0e55c87"
      ],
      "format": {
        "page_icon": "🔫",
        "copied_from_pointer": {
          "id": "0976bfa6-392a-40b0-8415-94a006dba8d9",
          "table": "block",
          "spaceId": "733a82c1-3e5b-4df0-b66d-79919f319360"
        },
        "social_media_image_preview_url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/680541e1-a046-47d2-94cc-4dee7bd10b2a/b08491df-f092-4d17-9e61-31f2d6924ec5/SocialMediaPreviewImage.png"
      },
      "created_time": 1724178729220,
      "last_edited_time": 1724406261170,
      "parent_id": "272cc423-9fa6-498d-aabc-385796389039",
      "parent_table": "collection",
      "alive": true,
      "copied_from": "0976bfa6-392a-40b0-8415-94a006dba8d9",
      "file_ids": [
        "b5399600-ded1-4cee-a713-88c5bf45e66d",
        "b784291c-b82b-46e6-9097-2d843719c59d",
        "b08491df-f092-4d17-9e61-31f2d6924ec5"
      ],
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "e9c95945-794e-462d-92fe-07e34d26b368": {
    "value": {
      "id": "e9c95945-794e-462d-92fe-07e34d26b368",
      "version": 51,
      "type": "collection_view_page",
      "view_ids": [
        "302c8ad9-4714-4ce8-b36f-2d48d9acce71",
        "cd7910ce-6996-4a0e-9b6b-9cfd740b37cc"
      ],
      "collection_id": "272cc423-9fa6-498d-aabc-385796389039",
      "format": {
        "site_id": "8b5ae335-5ce8-4e68-a6ed-a6d1c700edad",
        "collection_pointer": {
          "id": "272cc423-9fa6-498d-aabc-385796389039",
          "table": "collection",
          "spaceId": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
        },
        "copied_from_pointer": {
          "id": "20720198-ca7a-4e1b-92af-0a007d3b45a4",
          "table": "block",
          "spaceId": "733a82c1-3e5b-4df0-b66d-79919f319360"
        },
        "social_media_image_preview_url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/680541e1-a046-47d2-94cc-4dee7bd10b2a/c6614f1d-4e52-41ae-949a-eb960e2e5091/SocialMediaPreviewImage.png"
      },
      "permissions": [
        {
          "role": "editor",
          "type": "user_permission",
          "user_id": "4521784a-85f4-4bbe-931d-8bdb8d717100"
        },
        {
          "role": "reader",
          "type": "public_permission",
          "added_timestamp": 1724178748342
        }
      ],
      "created_time": 1724178729221,
      "last_edited_time": 1724406068199,
      "parent_id": "e5280789-fa8c-459c-b386-cbc0a290529b",
      "parent_table": "block",
      "alive": true,
      "copied_from": "20720198-ca7a-4e1b-92af-0a007d3b45a4",
      "file_ids": [
        "8865bd23-a86f-41e5-9463-ac81cb3f9c18",
        "c6614f1d-4e52-41ae-949a-eb960e2e5091"
      ],
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7": {
    "value": {
      "id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "version": 215,
      "type": "ai_block",
      "properties": {
        "title": [
          [
            "create an example for all Notion items (like heading1, heading2, heading3, etc)"
          ]
        ]
      },
      "content": [
        "e9ca3585-0e6e-43e5-8e5e-2e3960460a68",
        "d2522a3c-b99c-4ded-93cd-17088217f037",
        "d4ceb4fb-d77e-4087-a5bb-f439ce651958",
        "e60931f3-3057-4e0b-8c0e-292dea0aad91",
        "d4b73e9a-8784-4ed3-b710-16c1f2b92eb3",
        "05af5b33-a608-4a6a-93ab-9bd2e1880e4f",
        "b01447a7-9229-40ea-a608-87de25c869d7",
        "66e25cb4-e946-48ad-a7ac-41415fdb3c82",
        "f2c234e3-ab44-4ef7-8721-51057b9ed50c",
        "fe5bc06e-620d-472f-ae4a-8ad380674bb1",
        "04a10ca2-a531-4a59-a9e8-f2dbb7ef8776",
        "619f77e1-fb90-45b4-8c18-1ec8af203b2d",
        "592de30a-aa9a-4954-9b48-2f660fd31c2c",
        "3e8f76e2-51d4-4e00-bb49-df6965f3b338",
        "568791b9-cf2f-4b92-bd0d-2324df50e9b1",
        "08063f6c-e41a-4ad0-a9c2-74e43673b0a5",
        "b85256c8-7556-48eb-b32d-e0ee8488eef6",
        "f47efd44-45fc-4bdf-b422-3d849c15c846",
        "c7c413d6-e533-4191-a4d3-f39e402ddce3"
      ],
      "format": {
        "ai_prompt_key": "helpMeWrite",
        "ai_last_edited": 1724405851400
      },
      "created_time": 1724405823768,
      "last_edited_time": 1724405851403,
      "parent_id": "3316869a-d425-492c-9024-bc3ceb62e3bb",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "b4ee41d0-0ccd-44f2-bbb9-227ed0e55c87": {
    "value": {
      "id": "b4ee41d0-0ccd-44f2-bbb9-227ed0e55c87",
      "version": 3,
      "type": "text",
      "created_time": 1724405859725,
      "last_edited_time": 1724405859726,
      "parent_id": "3316869a-d425-492c-9024-bc3ceb62e3bb",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "e9ca3585-0e6e-43e5-8e5e-2e3960460a68": {
    "value": {
      "id": "e9ca3585-0e6e-43e5-8e5e-2e3960460a68",
      "version": 4,
      "type": "header",
      "properties": {
        "title": [
          [
            "Heading 1 Example"
          ]
        ]
      },
      "created_time": 1724405851386,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "d2522a3c-b99c-4ded-93cd-17088217f037": {
    "value": {
      "id": "d2522a3c-b99c-4ded-93cd-17088217f037",
      "version": 4,
      "type": "sub_header",
      "properties": {
        "title": [
          [
            "Heading 2 Example"
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "d4ceb4fb-d77e-4087-a5bb-f439ce651958": {
    "value": {
      "id": "d4ceb4fb-d77e-4087-a5bb-f439ce651958",
      "version": 4,
      "type": "sub_sub_header",
      "properties": {
        "title": [
          [
            "Heading 3 Example"
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "e60931f3-3057-4e0b-8c0e-292dea0aad91": {
    "value": {
      "id": "e60931f3-3057-4e0b-8c0e-292dea0aad91",
      "version": 4,
      "type": "sub_sub_header",
      "properties": {
        "title": [
          [
            "Heading 4 Example"
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "d4b73e9a-8784-4ed3-b710-16c1f2b92eb3": {
    "value": {
      "id": "d4b73e9a-8784-4ed3-b710-16c1f2b92eb3",
      "version": 4,
      "type": "sub_sub_header",
      "properties": {
        "title": [
          [
            "Heading 5 Example"
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "05af5b33-a608-4a6a-93ab-9bd2e1880e4f": {
    "value": {
      "id": "05af5b33-a608-4a6a-93ab-9bd2e1880e4f",
      "version": 4,
      "type": "sub_sub_header",
      "properties": {
        "title": [
          [
            "Heading 6 Example"
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "b01447a7-9229-40ea-a608-87de25c869d7": {
    "value": {
      "id": "b01447a7-9229-40ea-a608-87de25c869d7",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "Bold Text Example",
            [
              [
                "b"
              ]
            ]
          ]
        ]
      },
      "created_time": 1724405851387,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "66e25cb4-e946-48ad-a7ac-41415fdb3c82": {
    "value": {
      "id": "66e25cb4-e946-48ad-a7ac-41415fdb3c82",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "Italic Text Example",
            [
              [
                "i"
              ]
            ]
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "f2c234e3-ab44-4ef7-8721-51057b9ed50c": {
    "value": {
      "id": "f2c234e3-ab44-4ef7-8721-51057b9ed50c",
      "version": 4,
      "type": "quote",
      "properties": {
        "title": [
          [
            "Blockquote Example"
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "fe5bc06e-620d-472f-ae4a-8ad380674bb1": {
    "value": {
      "id": "fe5bc06e-620d-472f-ae4a-8ad380674bb1",
      "version": 4,
      "type": "bulleted_list",
      "properties": {
        "title": [
          [
            "Bullet List Item 1"
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "04a10ca2-a531-4a59-a9e8-f2dbb7ef8776": {
    "value": {
      "id": "04a10ca2-a531-4a59-a9e8-f2dbb7ef8776",
      "version": 4,
      "type": "bulleted_list",
      "properties": {
        "title": [
          [
            "Bullet List Item 2"
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "619f77e1-fb90-45b4-8c18-1ec8af203b2d": {
    "value": {
      "id": "619f77e1-fb90-45b4-8c18-1ec8af203b2d",
      "version": 4,
      "type": "numbered_list",
      "properties": {
        "title": [
          [
            "Numbered List Item 1"
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "592de30a-aa9a-4954-9b48-2f660fd31c2c": {
    "value": {
      "id": "592de30a-aa9a-4954-9b48-2f660fd31c2c",
      "version": 4,
      "type": "numbered_list",
      "properties": {
        "title": [
          [
            "Numbered List Item 2"
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "3e8f76e2-51d4-4e00-bb49-df6965f3b338": {
    "value": {
      "id": "3e8f76e2-51d4-4e00-bb49-df6965f3b338",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "Inline Code Example",
            [
              [
                "c"
              ]
            ]
          ]
        ]
      },
      "created_time": 1724405851388,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "568791b9-cf2f-4b92-bd0d-2324df50e9b1": {
    "value": {
      "id": "568791b9-cf2f-4b92-bd0d-2324df50e9b1",
      "version": 4,
      "type": "code",
      "properties": {
        "title": [
          [
            "Code Block Example\n"
          ]
        ],
        "language": [
          [
            "Plain Text"
          ]
        ]
      },
      "format": {
        "code_wrap": true
      },
      "created_time": 1724405851389,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "08063f6c-e41a-4ad0-a9c2-74e43673b0a5": {
    "value": {
      "id": "08063f6c-e41a-4ad0-a9c2-74e43673b0a5",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "Link Example",
            [
              [
                "a",
                "https://www.notion.so/borjamruizdana/e9c95945794e462d92fe07e34d26b368?v=cd7910ce69964a0e9b6b9cfd740b37cc&p=3316869ad425492c9024bc3ceb62e3bb&pm=s#"
              ]
            ]
          ]
        ]
      },
      "created_time": 1724405851389,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "b85256c8-7556-48eb-b32d-e0ee8488eef6": {
    "value": {
      "id": "b85256c8-7556-48eb-b32d-e0ee8488eef6",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "::: aside"
          ]
        ]
      },
      "created_time": 1724405851389,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "f47efd44-45fc-4bdf-b422-3d849c15c846": {
    "value": {
      "id": "f47efd44-45fc-4bdf-b422-3d849c15c846",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            "Callout Example"
          ]
        ]
      },
      "created_time": 1724405851389,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  },
  "c7c413d6-e533-4191-a4d3-f39e402ddce3": {
    "value": {
      "id": "c7c413d6-e533-4191-a4d3-f39e402ddce3",
      "version": 4,
      "type": "text",
      "properties": {
        "title": [
          [
            ":::"
          ]
        ]
      },
      "created_time": 1724405851389,
      "last_edited_time": 1724405851403,
      "parent_id": "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7",
      "parent_table": "block",
      "alive": true,
      "space_id": "680541e1-a046-47d2-94cc-4dee7bd10b2a"
    },
    "role": "reader"
  }
}