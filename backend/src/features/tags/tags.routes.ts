import { Router } from "express";
import * as tagsController from './tags.controller' 
import { wrapper } from "../../middlewares/wrapper";
export const tagsRouter = Router();

tagsRouter.get("/", wrapper(tagsController.getTags));
tagsRouter.get("/:id", wrapper(tagsController.getTagsById));
tagsRouter.post("/", wrapper(tagsController.addTag));
tagsRouter.delete("/:id", wrapper(tagsController.deleteTag));