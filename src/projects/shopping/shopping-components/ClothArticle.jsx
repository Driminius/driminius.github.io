
const ClothArticle = ( {item} ) => {
    return(
                <div
                    className='p-5'
                >
                <img
                    className=' pb-3 h-100 w-100% object-cover'
                    src={item.image}
                    />
                    <h2 className='text-2xl font-bold'>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.cost}</p>
                </div>
    )
}

/*
<div
                className='grid grid-cols-[100px_800px_400px] gap-5'
            >
                <div 
                    className='grid'
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur aliquam rerum obcaecati alias fugit deleniti. 
                        Reiciendis nihil sequi ducimus maxime repellendus fuga, 
                        quia laudantium, quidem facilis voluptas, eos provident quisquam.</p>
                </div>
                <div
                    className=''
                >
                <img
                    className=' pb-3 h-100 w-100% object-cover'
                    src={item.image}
                    />
                    <h2 className='text-2xl font-bold'>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.cost}</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti odio in eius id corporis, deserunt tempore quisquam sed, 
                        corrupti est aliquid ratione accusamus error et, pariatur blanditiis 
                        commodi asperiores ipsam.</p>
                </div>
            </div>
*/

export default ClothArticle;