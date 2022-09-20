<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSkillTypeRequest;
use App\Http\Requests\UpdateSkillTypeRequest;
use App\Models\SkillType;

class SkillTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSkillTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSkillTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function show(SkillType $skillType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function edit(SkillType $skillType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSkillTypeRequest  $request
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSkillTypeRequest $request, SkillType $skillType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function destroy(SkillType $skillType)
    {
        //
    }
}
