<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
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

        return Inertia::render('Project', [
            'projects' => $projects,
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
        Project::create([
            'title' => $request->request->get('title'),
            'description' => $request->request->get('description'),
            'url' => $request->request->get('url'),
            'repo_url' => $request->request->get('repo_url'),
            'image' => $request->request->get('image'),
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
