const ColorBanner = ( {catchline = '30% OFF EVERYTHING', color='teal', fontCol='white'} ) => {
    return(
        //className="bg-`{colorUser}`-500 pt-15 pb-15"
        //style={{backgroundColor: color}}
        <section
        style={{backgroundColor: `${color}`, color: `${fontCol}` }}
            className='pt-10 pb-10'
        >    <p
                className='text-center '
            >       
            The Long Weekend</p>
            <h3
                className='text-center  text-2xl  tracking-wide font-extrabold'
            >{catchline}</h3>
            <p
                className='text-center '
            >
            Shorts are 50%</p>
        </section>
    )
}
export default ColorBanner;