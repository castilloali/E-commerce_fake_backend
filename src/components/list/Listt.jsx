import React from 'react'
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';

const Listt = ({subCats, sort, maxprice, catId}) => {

    const { data, loading, errorr } = useFetch(
      `/products?populate=*&[filters] [caregories] [id]=${catId}${subCats.map(
        (item) => `&[filters] [sub_categories] [id] [$eq]=${item}`
      )}&[filters] [price] [$lte]=${maxprice}&sort=price:${sort}`
    );


  return (
    <div className='flex flex-wrap justify-between gap-3'>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Listt
