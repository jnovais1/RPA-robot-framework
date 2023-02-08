import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateVideoController } from "../Modules/Videos/create_videos/CreateVideosController";
import { DeleteVideoController } from "../Modules/Videos/delete_video/DeleteVideoController";
import { ReadAllVideosController } from "../Modules/Videos/read_videos/ReadAllVideosController";
import { ReadVideoByIDAreaController } from "../Modules/Videos/read_videos/byareavideo/ReadVideoByAreaController";
import { ReadVideoByIDController } from "../Modules/Videos/read_videos/ReadVideoByIDController";
import { UpdateVideoController } from "../Modules/Videos/update_videos/UpdateVideoController";

const videoRoute = Router();

const readAllVideos = new ReadAllVideosController();
const readVideoByID = new ReadVideoByIDController();
const postVideo = new CreateVideoController();
const updateVideo = new UpdateVideoController();
const deleteVideo = new DeleteVideoController();
const readVideoFromAreaID = new ReadVideoByIDAreaController();

//Esta rota busca em "Area_Video" todos os vídeos pesquisados pelo id da area
//E Então mostra as informações dos vídeos. 
videoRoute.get('/:id', readVideoFromAreaID.handle);

videoRoute.get('/', readAllVideos.handle);
videoRoute.get('/:id', readVideoByID.handle);
videoRoute.post('/', ensureAuthenticateUser, postVideo.handle);
videoRoute.put('/:id', ensureAuthenticateUser, updateVideo.handle);
videoRoute.delete('/:id', ensureAuthenticateUser, deleteVideo.handle);

export { videoRoute };