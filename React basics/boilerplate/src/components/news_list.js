import React from 'react';
import NewsItem from './news_list_item'

const NewsList = props => {

    const items = props.news.map((item) => {
        return(
            <NewsItem key={item.id} item={item}/>
        )
    })
    return (
        <div id="newsfeed">
            <h3>the news are: </h3>
            {items}
        </div>
    )
}

export default NewsList;