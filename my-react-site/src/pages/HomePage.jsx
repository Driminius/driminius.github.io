import HeadingTwoCopy from "../components/HeadingTwoCopy";

const HomePage = () => {
    return (
        <section>
            <p>hello from HomePage</p>
      
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eum porro aut maiores atque non? Itaque porro iste esse sunt, rerum labore fugiat doloribus, dignissimos sequi aut vitae necessitatibus reiciendis?</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eum porro aut maiores atque non? Itaque porro iste esse sunt, rerum labore fugiat doloribus, dignissimos sequi aut vitae necessitatibus reiciendis?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid ipsam repellat dolores voluptas ipsa consectetur et architecto totam amet? Repellendus fuga non quae modi adipisci accusamus, illo veritatis minus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus tempora dolorem magnam, nesciunt placeat possimus, sapiente mollitia consequuntur recusandae voluptatem animi autem minima accusantium. Praesentium tempore nesciunt itaque voluptatum.</p>    
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eum porro aut maiores atque non? Itaque porro iste esse sunt, rerum labore fugiat doloribus, dignissimos sequi aut vitae necessitatibus reiciendis?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid ipsam repellat dolores voluptas ipsa consectetur et architecto totam amet? Repellendus fuga non quae modi adipisci accusamus, illo veritatis minus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus tempora dolorem magnam, nesciunt placeat possimus, sapiente mollitia consequuntur recusandae voluptatem animi autem minima accusantium. Praesentium tempore nesciunt itaque voluptatum.</p>    
            
            <HeadingTwoCopy head='Technologies' copy='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero error ratione mollitia quos officia. Animi, a!' />


            <div className='mt-7 mb-7'>
                <h2
                className=' mt-2 mb-2 text-2xl font-bold tracking-wide'
            ><span className=' pb-1 border-b-8 border-[#E1E1E1]'>Let's Work Together</span></h2>
            <p
                className='pt-4 '
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ratione sit laudantium suscipit atque sapiente at, aspernatur distinctio voluptatum corporis asperiores harum dolorem aperiam nam non doloremque officiis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero error ratione mollitia quos officia. Animi, a!
            </p>
            </div>


            <div className='mt-7 mb-7'>
                <h2
                className=' mt-2 mb-2 text-2xl font-bold tracking-wide'
            ><span className=' pb-1 border-b-8 border-[#E1E1E1]'>About Me</span></h2>
            <p
                className='pt-4 '
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero error ratione mollitia quos officia. Animi, a!
            </p>
            </div>

        <HeadingTwoCopy head='Hello World' copy='Welcome to my world!' />

        </section>
    )

}

export default HomePage;