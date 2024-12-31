import React from 'react';
import glass from '../assests/search.png';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			 <img className='searchIcon' src={glass}></img>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;