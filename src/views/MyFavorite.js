import React from "react";
import gotopIcon from '../images/btn_goTop.png'
import Pagination from '../components/Pagination';
import Card from '../components/Card';


const MyFavorite = (props) =>{
    const {checkMyList,handleScrollTop} =  props;

  return (
    <div className="content container"> 
        <div className="main">
            {/* <h2 className="title-main">{currentZone}</h2> */}
            <ul className="list">
                {/* 因為新增分頁功能所以要改成 currentCards */}
            {/* checkMyList 變數 */}
            {checkMyList.map(function(card){
              // currentCards Id 和 checkMyList 資料比對，比對出 currentCards 的 Id 有沒有在 checkMyList 裡面，有的話並取出 index 值
              //indexOf() 我要找的值             
                  return<Card key={card.Id} item={card} isFavorite={true} myList={checkMyList}/>

                  // 通常 map 要加上 key (固定值)
            })}
            </ul>
        </div>

        <div className="goTop" onClick={handleScrollTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
      
        {/* <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cardsByZone.length}
        paginate={paginate}
        isDeafultPage = {isDeafultPage} /> */}
    </div>
  
  );
};


export default MyFavorite;