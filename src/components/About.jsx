import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b 
        from-gray-800 to-black text-white " 
        >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-white ">
                About</p>
            </div>
        <p className="text-xl mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, 
            vitae repudiandae repellat sint fugiat aperiam, perspiciatis a, eius 
            neque esse odio reiciendis qui maxime consequatur alias similique? 
            Corporis iusto consectetur, a sint, omnis explicabo dicta voluptatum odit alias quis 
            possimus numquam nisi et fugiat nulla, adipisci ipsa nobis. Doloremque, non.
        </p>
        <br />
        <p className="text-xl mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Libero dolores sint ex reiciendis rem provident laborum doloribus autem 
                facere nihil tempora fuga nulla quis error velit, optio et numquam ipsa 
                officia officiis repellendus omnis. Quibusdam non ad itaque autem maxime 
                asperiores rem 
                inventore! Sint praesentium ipsa doloribus recusandae? Suscipit, delectus!
        </p>
        </div>
    </div>
  )
};

export default About;