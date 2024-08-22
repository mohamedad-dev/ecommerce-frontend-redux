import { useEffect } from 'react'

// import { getArticles } from '../../../features/articleSlice'
import {
  getArticlesPagination,
  setPage,
  setLimit,
  setSearchTerm,
} from '../../features/articleSlice'

import { useDispatch, useSelector } from 'react-redux'

import Pagination from '../admin/articles/Pagination'
import Affichearticlescard from './Affichearticlescard'

const Listarticlescard = () => {
  const { page, limit, searchTerm } = useSelector(
    (state) => state.storearticles
  )
  const dispatch = useDispatch()

  const loadarticles = async () => {
    await dispatch(getArticlesPagination())
  }

  useEffect(() => {
    loadarticles()
    console.log('effect')
  }, [dispatch, limit, page, searchTerm])

  /// teba3 hela el 5 10 20
  const handleLimitChange = (event) => {
    dispatch(setLimit(parseInt(event.target.value, 10)))
    dispatch(setPage(1)) // Réinitialiser la page lorsque le nombre d'éléments par page change
  }

  return (
    <div>
      <Affichearticlescard />
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <div className="limit-selector-container">
          <label>
            Afficher &nbsp;
            <select
              value={limit}
              onChange={(event) => {
                handleLimitChange(event)
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Listarticlescard
