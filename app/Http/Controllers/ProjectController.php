<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\ProjectStatusCodeEnum;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): InertiaResponse|RedirectResponse
    {
        $projects = Project::all()->sortBy('display_order');

        $projectStatuses = ProjectStatusCodeEnum::toSimpleArray();

        return Inertia::render('Project', [
            'projects' => $projects,
            'projectStatuses' => $projectStatuses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreProjectRequest  $request
     * @return Response
     */
    public function store(StoreProjectRequest $request): Response|RedirectResponse
    {
        $picturePath = $request->file('image');

        if (null !== $picturePath) {
            $picturePath = Storage::putFileAs('files/projects', $request->file('image'), 'image-project-'.md5($request->request->get('title')).'.'.$picturePath->extension());
        }

        Project::create([
            'title' => $request->request->get('title'),
            'description' => $request->request->get('description'),
            'url' => $request->request->get('url'),
            'repo_url' => $request->request->get('repo_url'),
            'image' => $picturePath ?? null,
            'status' => $request->request->get('status'),
            'display_order' => $request->request->get('display_order'),
        ]);

        return redirect()->route('projects.index')->with('message', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  Project  $project
     * @return Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Project  $project
     * @return Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateProjectRequest  $request
     * @param  Project  $project
     * @return Response
     */
    public function update(UpdateProjectRequest $request): Response|RedirectResponse
    {
        $project = Project::find($request->request->get('id'));

        $picturePath = $request->file('image');

        if (null !== $picturePath) {
            $oldPicturePath = $project->image;

            if (null !== $oldPicturePath) {
                Storage::delete($oldPicturePath);
            }

            $picturePath = Storage::putFileAs('files/projects', $request->file('image'), 'image-project-'.md5($request->request->get('title')).'.'.$picturePath->extension());
        }

        $project->update($request->validated());

        return redirect()->route('projects.index')->with([
            'message' => 'Project updated successfully.',
            'project' => $project,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Project  $project
     * @return Response
     */
    public function destroy(int $id): Response|RedirectResponse
    {
        $project = Project::find($id);
        $project->delete();

        return redirect()->route('projects.index')->with('message', 'Project deleted successfully.');
    }
}
