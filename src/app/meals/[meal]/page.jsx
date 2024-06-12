import React from 'react';

const MealDetailsPage = ({ params }) => {
    return (
        <div>
            MealDetailsPage {params?.id}
        </div>
    );
};

export default MealDetailsPage;