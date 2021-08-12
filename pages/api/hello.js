export default function handler(req, res) {
    res.status(200).json({ 
        postfolio: [
            {
                name: 'tic toc toe',
                tech: 'react',
                concepts: ''
            },
            {
                name: 'applicar',
                tech: 'ionic',
                concepts: ''
            },
            {
                name: 'dashboard',
                tech: 'vue',
                concepts: ''
            }
        ] });
}