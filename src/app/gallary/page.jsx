import React from 'react';
import Image from 'next/image';

const gallaryPage = () => {
    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-3">Gallary Page</h3>
            <Image src="/public/images/pic-1.jpg" height={1000} width={1000} alt='picture' />
        </div>
    );
};

export default gallaryPage;