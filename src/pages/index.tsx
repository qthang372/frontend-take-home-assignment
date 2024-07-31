import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [selectedStatus, setSelectedStatus] = useState('TabAll')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root
            className="TabsRoot"
            defaultValue="TabAll"
            onValueChange={(value) => setSelectedStatus(value)}
          >
            <Tabs.List
              className="TabsList space-x-3"
              aria-label="Manage Todo List"
            >
              <Tabs.Trigger
                className={`TabsTrigger rounded-[20px] border ${
                  selectedStatus === 'TabAll' && 'bg-[#334155] text-white'
                } px-5 py-2`}
                value="TabAll"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`TabsTrigger rounded-[20px] border ${
                  selectedStatus === 'TabPending' && 'bg-[#334155] text-white'
                } px-5 py-2`}
                value="TabPending"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`TabsTrigger rounded-[20px] border ${
                  selectedStatus === 'TabCompleted' && 'bg-[#334155] text-white'
                } px-5 py-2`}
                value="TabCompleted"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="TabAll">
              <div className="pt-10">
                <TodoList statusTodo={['completed', 'pending']} />
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="TabPending">
              <div className="pt-10">
                <TodoList statusTodo={['pending']} />
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="TabCompleted">
              <div className="pt-10">
                <TodoList statusTodo={['completed']} />
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
