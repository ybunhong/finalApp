function FilterBar({ filter, onFilterChange, onClearCompleted, completedCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        <button
          onClick={() => onFilterChange('all')}
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`filter-button ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </button>
      </div>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-button"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default FilterBar