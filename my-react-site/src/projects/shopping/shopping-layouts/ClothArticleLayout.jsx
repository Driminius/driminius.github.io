import { Outlet } from "react-router";
import { useParams } from "react-router";
import ClothArticle from "../shopping-components/ClothArticle";

const ClothArticleLayout = ({list}) => {
    const {id} = useParams();
    // use id to gather information about the object

    // sometimes the key can be random letters, so we need to find the index of the elemenet
    // im not useing === beause sometimes the value can be a string or number
    // as long as the value is the same, the type doesn't need to be equal
    const index = list.findIndex( x => x.id == `${id}`);

    /*
        how to iterate through an array data field
        const myObject = {
        myArray: [13, 14, 15],
        };

        myObject.myArray.forEach((element) => {
        console.log(element);
        });
    */
    return (
        <>
       <div
                className='grid grid-cols-[100px_800px_400px] p-5'
            >
                <div 
                    className='grid'
                >
                    <img
                    className=' pb-3 h-100px w-100px object-cover border-2 border-solid'
                    src={list[index].image}
                    />
                     <img
                    className=' pb-3 h-100px w-100% object-cover border-2 border-solid'
                    src={list[index].image}
                    />
                     <img
                    className=' pb-3 h-100px w-100% object-cover border-2 border-solid'
                    src={list[index].image}
                    />
                </div>
                <div
                    className=''
                >
               <ClothArticle item={list[index]} />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{list[index].title}</h2>
                    <p>{list[index].description}</p>
                    <p>{list[index].brand.name}</p>
                    <p>{list[index].brand.slogan}</p>
                    <p>{list[index].brand.contactEmail}</p>
                    <p>{list[index].brand.contactPhone}</p>
                    <p>{list[index].myData}</p>
                </div>
            </div>
        </>
    )
}

export default ClothArticleLayout;