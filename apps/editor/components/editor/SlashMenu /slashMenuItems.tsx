import { BlockSchema, defaultBlockSchema, PartialBlock } from '@blocknote/core'
import {
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
} from '@blocknote/react'
import { insertOrUpdateBlock } from '../../../lib/editor'
import TaskBlock from '../taskBlock'

export const customSchema: BlockSchema = {
  ...defaultBlockSchema,
  // image: ImageBlock,
  task: TaskBlock,
}

const insertTask: ReactSlashMenuItem<typeof customSchema> = {
  name: 'Task',
  execute: (editor) => {
    insertOrUpdateBlock(editor, {
      type: 'task',
    } as PartialBlock<BlockSchema>)
  },
  aliases: ['task', '/task'],
  group: 'Tasks',
  icon: <div> + </div>,
  hint: 'Add a task',
}

export const slashMenuItems = [
  ...getDefaultReactSlashMenuItems(customSchema),
  insertTask,
]
