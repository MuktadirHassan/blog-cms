import ArticleCard from '../components/ArticleCard'
import ArticleCardFull from '../components/ArticleCardFull'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div className="mx-auto pb-4 px-6 md:w-5/6">
    <Navbar></Navbar>
    <div className='sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6'>
      <div>
        <ArticleCardFull></ArticleCardFull>
      </div>
      <div>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </div>
    </div>
  </div>
  )
}
