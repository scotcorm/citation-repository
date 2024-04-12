import React from 'react';
import CitationAuthor from '../components/CitationAuthor';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/contemplation.jpg';

const CitationDetails = () => {
  return (
    <section className='citation-detail'>
      <div className='container citation-detail_container'>
        <div className='citation-detail_header'>
          <CitationAuthor />
          <div className='citation-detail_buttons'>
            <Link to={`/citations/user1/edit`} className='btn sm primary'>
              Edit
            </Link>
            <Link to={`/citations/user1/delete`} className='btn sm danger'>
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the citation title!</h1>
        <div className='citation-detail_thumbnail'>
          <img src={Thumbnail} alt='' />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          deserunt quod eius debitis vero exercitationem illo sunt cupiditate
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          deserunt quod eius debitis vero exercitationem illo sunt cupiditate
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          deserunt quod eius debitis vero exercitationem illo sunt cupiditate
          animi iste!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          deserunt quod eius debitis vero exercitationem illo sunt cupiditate
          animi iste!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          corporis dolore rerum doloremque saepe obcaecati provident qui facere
          quos quibusdam quo accusamus dolorum esse, expedita, assumenda commodi
          ex eveniet dicta autem nemo id aliquid architecto, eius sed! Harum
          quia, soluta, labore sed reiciendis est ea ex neque dicta nihil magni.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis alias
          velit quos eligendi et eum. Pariatur ipsa consectetur qui corporis quo
          harum ratione! Assumenda totam voluptas quo nostrum ipsum veritatis
          voluptate corrupti dolorem, labore, blanditiis vel libero dignissimos
          fugiat. Vitae dolorum pariatur at suscipit fugit nesciunt, rerum iusto
          quaerat ipsum expedita dignissimos numquam eum tenetur error autem
          praesentium distinctio nemo aspernatur, consequatur fugiat sapiente
          velit! Quisquam excepturi dolorem necessitatibus placeat velit numquam
          explicabo rem voluptas ad dolor iusto nisi modi assumenda sed ex magni
          debitis facere neque ducimus, reprehenderit error nobis rerum!
          Molestias alias quae maiores voluptates ducimus ipsam asperiores
          quibusdam ipsum architecto modi voluptas debitis repellat aut sequi
          esse provident et, molestiae impedit laudantium, dolore expedita a!
          Quibusdam quasi illum corrupti eveniet eius consequatur iste voluptas
          commodi tempore totam temporibus non minima eum perspiciatis, quidem,
          rerum nihil suscipit optio atque unde natus. Error, culpa! Minima
          possimus illum nam illo obcaecati, iste magnam eligendi. Placeat
          pariatur at incidunt ipsam similique consectetur hic distinctio,
          voluptate nam assumenda porro harum ab, repellendus dolorum aliquid,
          totam sit iure enim earum. Temporibus recusandae sed beatae, illum
          nihil voluptate unde facilis nisi hic sit expedita sapiente. Quia
          optio excepturi suscipit consequuntur perferendis corrupti error odio
          aspernatur nulla alias necessitatibus maiores voluptatum in porro,
          adipisci laudantium, accusantium ducimus? Necessitatibus tenetur
          maiores explicabo optio repellat pariatur blanditiis nostrum et.
          Omnis, eaque similique aliquam ex ipsum labore sed neque veritatis,
          dolor necessitatibus laborum rem. Fugiat ipsam praesentium minima
          veniam, eaque enim optio debitis cupiditate tenetur et impedit ad
          facilis officia, voluptates minus provident, incidunt laudantium!
          Nobis vitae soluta animi consequatur magni asperiores repellat quasi,
          unde temporibus quidem eius laborum provident quod incidunt doloremque
          sed natus officia iste modi sequi! Ipsam cumque sint, laudantium
          dolorem culpa obcaecati ad eos assumenda, magni mollitia rem? Officia
          eum laboriosam eaque voluptate ipsa.
        </p>
      </div>
    </section>
  );
};

export default CitationDetails;
