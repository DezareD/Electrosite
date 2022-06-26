import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
        width: 647,
        height: 647
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        width: 380,
        height: 319
    },
    {
        src: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        width: 513,
        height: 319
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        width: 513,
        height: 312
    },
    {
        src: 'https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg',
        width: 380,
        height: 312
    }
];

export default function Gallery() {
    return (
        <PhotoAlbum layout="columns" columns={3} spacing={0} photos={photos} />
    );
}