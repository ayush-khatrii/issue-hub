import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SingleIssueLoading = () => {
  return (
    <section className='max-w-xl mt-10'>
      <Skeleton />
      <div className="flex gap-3">
        <Skeleton width="4rem" />
        <Skeleton width="5rem" />
      </div>
      <div className="mt-5 h-40 max-w-4xl">
        <Skeleton count={5} />
      </div>
    </section>
  )
}

export default SingleIssueLoading