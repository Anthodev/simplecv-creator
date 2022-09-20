<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Models\Experience;
use App\Models\ExperienceType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|InertiaResponse
    {
        $experiences = Experience::all()->sortBy('display_order');
        $experienceTypes = ExperienceType::all();

        return Inertia::render('Experience', [
            'experiences' => $experiences,
            'experienceTypes' => $experienceTypes,
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
     * @param  StoreExperienceRequest  $request
     * @return Response|RedirectResponse
     */
    public function store(StoreExperienceRequest $request)
    {
        Experience::create([
            'title' => $request->request->get('title'),
            'description' => $request->request->get('description'),
            'location' => $request->request->get('location'),
            'company' => $request->request->get('company'),
            'company_url' => $request->request->get('company_url'),
            'start_date' => $request->request->get('start_date'),
            'end_date' => $request->request->get('end_date'),
            'display_order' => $request->request->get('display_order'),
            'experience_type_id' => $request->request->get('experience_type_id'),
        ]);

        return redirect()->route('experiences.index')->with('message', 'Experience created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  Experience  $experience
     * @return Response
     */
    public function show(Experience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Experience  $experience
     * @return Response
     */
    public function edit(Experience $experience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExperienceRequest $request): Response|RedirectResponse
    {
        $experience = Experience::find($request->request->get('id'));
        $experience->update($request->validated());

        return redirect()->route('experiences.index')->with([
            'message' => 'Experience updated successfully.',
            'experience' => $experience,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): Response|RedirectResponse
    {
        $experience = Experience::find($id);
        $experience->delete();

        return redirect()->route('experiences.index')->with('message', 'Experience deleted successfully.');
    }
}
