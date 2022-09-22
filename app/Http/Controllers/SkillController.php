<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
use App\Models\SkillType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): InertiaResponse|RedirectResponse
    {
        $skills = Skill::all()->sortBy('display_order');
        $skillTypes = SkillType::all();

        return Inertia::render('Skill', [
            'skills' => $skills,
            'skillTypes' => $skillTypes,
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
     * @param  StoreSkillRequest  $request
     */
    public function store(StoreSkillRequest $request): Response|RedirectResponse
    {
        Skill::create($request->validated());

        return redirect()->route('skills.index')->with('message', 'Skill created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  Skill  $skill
     * @return Response
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Skill  $skill
     * @return Response
     */
    public function edit(Skill $skill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateSkillRequest  $request
     * @param  Skill  $skill
     */
    public function update(UpdateSkillRequest $request): Response|RedirectResponse
    {
        $skill = Skill::find($request->request->get('id'));
        $skill->update($request->validated());

        return redirect()->route('skills.index')->with('message', 'Skill updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Skill  $skill
     */
    public function destroy(int $id): Response|RedirectResponse
    {
        $skill = Skill::find($id);
        $skill->delete();

        return redirect()->route('skills.index')->with('message', 'Skill deleted successfully.');
    }
}
