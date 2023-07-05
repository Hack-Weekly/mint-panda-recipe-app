import { AxiosError } from 'axios'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  let errorMessage: string;

  console.error(error)
  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof AxiosError) {
    if (typeof error.response?.data.message === "string" || typeof error.response?.data.status === "string") {
      errorMessage = error.response?.data.message || error.response?.data.status
    } else if (error.response?.data.message[0].children[0].constraints) {
      // parse the error tree and return the error messages
      errorMessage = error.response?.data.message[0].children.reduce((acc: string, obj: { constraints: string[] }) => {
        const temp = Object.values(obj.constraints).reduce((acc2: string, errorString: string) => {
          return acc2 + errorString + ","
        }, "")
        return acc + temp + "\n"
      }, "")
    } else {
      errorMessage = "Unknown error message"
    }
  } else {
    console.log(error)
    errorMessage = "Unknown error message"
  }

  return (
    <div
      id='error-page'
      className='flex flex-col gap-8 justify-center items-center h-screen'
    >
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className='text-slate-400'>
        <i>
          {errorMessage.split(",").map((str, index) => <p key={index}>{str}</p>)}
        </i>
      </div>
    </div>
  )
}

export default ErrorPage