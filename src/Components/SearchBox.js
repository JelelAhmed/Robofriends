import React from 'react';


const SearchBox = ({ searchfield, searchChange}) => {
	console.log('render');
	return (
	  <div className='pa2'>
		<input
		 className='pa2 ba b--green bg-lightest-blue' 
		 type="search"
		 placeholder="search robots"
		 onChange={searchChange}
		/>
	  </div>
	)	
}

export default SearchBox;