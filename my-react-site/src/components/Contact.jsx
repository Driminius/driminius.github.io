const Contact = () => {
    return (

        <section
            className='w-100%'
        >
            <div
                className='bg-yellow-300'
            >
                <div
                    className='grid grid-cols-1 bg-'
                >
                    <h1 className='text-xl bolder'>Send me a comment!</h1>
                    <form
                        action='mailto:domingoadrianwork@gmail.com'
                        method='post'
                    >
                        <input 
                            className=''
                            type='text'
                            name='comment'
                            placeholder='Enter a comment'
                        />
                        <input 
                            type='submit'
                        />
                    </form>
                </div>
            </div>
     {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmDE7H0uRyirMC2e-zkp0wIPzmjA1CGmwKMENsGZWzX8149w/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

        </section>
    )
}

export default Contact;