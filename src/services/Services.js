import {faker} from '@faker-js/faker';
export const getAnimals = (animalToFind) => {
    const getImage = () => faker.image.url({ width: 644, height: 362, category: 'animals' });
    const getType = () => faker.animal.type();
    const getUrl = () => faker.internet.url();
    const getText = () => faker.lorem.sentences();
    const getTitle = () => faker.animal.petName();
    const data = [...new Array(10)].map((item, index) => {
        const type = getType();
        return (
            {
                type,
                id: ++index,
                url: getUrl(),
                title: getTitle(),
                description: getText(),
                image: getImage(),
            });
    });
    return data;
};
