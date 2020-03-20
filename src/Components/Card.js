import React from 'react';

const Card = ({name, email, id}) => {
	return (
      <div className= 'tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow'>
      	<img alt= 'robots' src={`https://robohash.org/${id}a?100*100`}/>
      	<div >
      	  <h2>{name}</h2>
      	  <p>{email}</p>
      	</div>
      </div>
    );
}

export default Card;