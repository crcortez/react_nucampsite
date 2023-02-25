import { CAMPSITES } from '../../app/shared/CAMPSITES';

// selector funtions

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// written as a placeholder
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};
