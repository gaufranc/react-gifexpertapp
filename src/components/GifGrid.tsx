import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}: {category: string}) => {
    
  
    const {data:images, loading} = useFetchGifs(category);

  
    return (
        <>
        <h3>{category}</h3>

        <p className='animate__animated animate__flash'>{loading && 'Cargando...'}</p>
        <div className="card-grid">
            
            <ol>
                {
                    images.map((img: any) => 
                        <GifGridItem 
                            key={img.id}
                            {...img}/>
                    )
                }
         
            </ol>
        </div>
        </>
        
  )
}
