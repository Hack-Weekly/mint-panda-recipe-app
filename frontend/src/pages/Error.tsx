import { AxiosError } from 'axios'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  let errorMessage: string;
  
  console.log(error)
  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof AxiosError) {
    if (typeof error.response?.data.message === "string" || typeof error.response?.data.status === "string") {
      errorMessage = error.response?.data.message || error.response?.data.status
    } else if (Array.isArray(error.response?.data.message) && error.response?.data.message[0] && error.response?.data.message[0].constraints) {
      errorMessage = Object.values(error.response?.data.message[0].constraints).toString()
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
      <p className='text-slate-400'>
        <i>
          {errorMessage}
        </i>
      </p>
    </div>
  )
}

export default ErrorPage