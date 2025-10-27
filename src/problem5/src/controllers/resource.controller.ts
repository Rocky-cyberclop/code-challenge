import * as service from "../services/resource.service";

export const init = async () => await service.createTable();

export async function create(req: Request, res: Response) {
  const resource = await service.createResource(req.body);
  res.status(201).json(resource);
}

export async function list(req: Request, res: Response) {
  const { q } = req.query;
  const resources = await service.getAllResources(q as string);
  res.json(resources);
}

export async function detail(req: Request, res: Response) {
  const resource = await service.getResourceById(Number(req.params.id));
  if (!resource) return res.status(404).json({ message: "Not found" });
  res.json(resource);
}

export async function update(req: Request, res: Response) {
  const resource = await service.updateResource(Number(req.params.id), req.body);
  res.json(resource);
}

export async function remove(req: Request, res: Response) {
  await service.deleteResource(Number(req.params.id));
  res.status(204).send();
}
