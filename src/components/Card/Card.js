// import * as React from 'react';
// import {
//     Card,CardActions,CardContent,CardMedia,Link,Typography 
// } from '@mui/material';

// const bookItems = [
//     {
//       title: 'Harry Potter e a Pedra Filosofal',
//       content: 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural.'
//     },
//     {
//       title: 'Harry potter e a Camara Secreta',
//       content: 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. '
//     },
//     {
//       title: 'Harry Potter e o Prizioneiro de Askaban',
//       content: 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter e o prisioneiro de Azkaban traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.'
//     },
//     {
//       title: 'Harry Potter e o Calice de Fogo',
//       content: 'Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio em que os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e nãomágicas que vêm adquirindo ao longo de suas vidas. '
//     },
//     {
//       title: 'Harry Potter e a Ordem da Fenix',
//       content: 'Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos trouxas. Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras.'
//     },
//     {
//         title: 'Harry Potter e o Enigma do Principe',
//         content: 'A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (nãobruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que sugam a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica.'
//       },
//       {
//         title: 'Harry Potter e as Reliquias da Morte',
//         content: 'Nessa busca desenfreada, contando apenas com os amigos Rony e Hermione, Harry descobre as Relíquias da Morte, que serão úteis na batalha do bem contra o mal.'
//       },

// ];
// {/* <Typography gutterBottom variant="h5" component="div">
//                 {(item.title)}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {(item.content)}
//             </Typography> */}

// const Imagem = ({photo}) =>{
//     return(
//         <CardMedia
//         sx={{ height: 140 }}
//         image = {photo}
//          />
//     )
// };

// // export default function MediaCard() {
// //     return (
// //         <Card sx={{ maxWidth: 345 }}>
// //             <Imagem/>
// //             <CardContent>
// //             {/* <List>
// //             {bookItems.map((item) => (
// //               <ListItem key={item} disablePadding>
// //                 <Link to={item.url}>{item.label}</Link>
// //               </ListItem> */}
// //             {/* ))} */}
// //           </List>
// //             </CardContent>
// //                 <CardActions>
// //                     <Link to = 'https://www.amazon.com.br/b?ie=UTF8&node=13348890011' size="small" >
// //                         Compre aqui
// //                     </Link>
// //                 </CardActions>
// //         </Card>
// //     );
// // }