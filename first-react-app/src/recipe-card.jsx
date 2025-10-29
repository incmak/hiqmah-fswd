export function RecipeCard({ ingredients, recipeName, showBtn = true }) {
  console.log('🚀 ~ RecipeCard ~ showBtn:', showBtn);
  return (
    <div
      style={{
        border: `2px solid ${recipeName === 'Burger' ? 'brown' : 'green'}`,
        backgroundColor: 'yellow',
        padding: '8px',
        borderRadius: '8px',
      }}
    >
      <p>{recipeName}</p>
      <ul className={`ingredients ${showBtn ? 'active' : ''}`}>
        {/* <li>{ingredients}</li> */}
        {ingredients ? (
          ingredients?.map((indgredient, index) => {
            return (
              <li key={index}>
                <p>{indgredient}</p>
              </li>
            );
          })
        ) : (
          <li>No Ingredients</li>
        )}
      </ul>
      {showBtn ? <button>View Details</button> : <p>Coming soon...</p>}
    </div>
  );
}
