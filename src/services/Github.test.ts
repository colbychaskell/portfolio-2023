import { getProjects } from './Github'

test('Fetches non-empty projects', async () => {
    const projectData = await getProjects();
    expect(projectData.length).not.toBe(0);
    expect(projectData[0].name).toBeDefined();
});
