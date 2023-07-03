import { AxiosError } from 'axios'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof AxiosError) {
    errorMessage = error.response?.data.message || error.response?.data.status
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