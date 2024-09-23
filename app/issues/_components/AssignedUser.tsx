// "use server"

// import prisma from "@/prisma/client"

// const AssignedUser = async ({ userId }: { userId: string }) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId
//     }
//   });

//   console.log(user)
//   return (
//     <p>
//       {
//         userId ? <p className="font-medium">Assigned to: {""}</p> : "Unassigned"
//       }
//     </p>
//   )
// }

// export default AssignedUser