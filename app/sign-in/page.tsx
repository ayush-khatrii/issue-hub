import { signIn } from "@/auth"
import { Button } from "@nextui-org/react"
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiBugDroidFill } from "react-icons/pi";
import { handleGitHubSignIn } from "@/app/actions/authActions";

const SignInPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md p-6 bg-zinc-100 border dark:border-zinc-600 border-zinc-300 dark:bg-gray-800 rounded-lg">
        <div className="flex flex-col items-center text-center justify-center mb-6">
          <PiBugDroidFill size={25} />
          <span className="font-medium my-5">
            Login to  IssueHub
          </span>
        </div>
        <div className="space-y-4">
          <form action={handleGitHubSignIn}>
            <Button
              type="submit"
              size="lg"
              startContent={<FaGithub size={20} className="text-white dark:text-black" />}
              className="w-full bg-[#24292e] hover:bg-[#2f363d] text-white dark:bg-[#f6f8fa] dark:hover:bg-[#e1e4e8] dark:text-black"
            >
              Sign in with GitHub
            </Button>
          </form>
          <Button
            size="lg"
            startContent={<FcGoogle size={20} />}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;