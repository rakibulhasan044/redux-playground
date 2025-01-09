import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types/task.types";

const Task = () => {

  const {data, isLoading} = useGetTasksQuery(undefined)

  if(isLoading) return <p>Loading....</p>
  
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger  value="All">All</TabsTrigger>
            <TabsTrigger  value="Low">Low</TabsTrigger>
            <TabsTrigger  value="Medium">Medium</TabsTrigger>
            <TabsTrigger  value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading && data.tasks.map((task: ITask) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
