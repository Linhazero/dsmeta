import axios from 'axios';
import { toast } from 'react-toastify';
import incon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type props = {
  saleId: number;
}
 

function hanledClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notication`)
  .then(Response => {
    toast.info("SMS enviado com sucesso");
  })
}

function NotificationButton( {saleId} : props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => hanledClick(saleId)}>
        <img src={incon} alt="Notificar" />
      </div>
    )
}

export default NotificationButton
