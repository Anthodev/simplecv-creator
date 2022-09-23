<?php

namespace App\Http\Controllers;

use App\Enums\ProjectStatusCodeEnum;
use App\Models\Experience;
use App\Models\ExperienceType;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SkillType;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function home(): InertiaResponse
    {
        $experiences = Experience::all()->sortBy('display_order');
        $experienceTypes = ExperienceType::all();

        $projects = Project::all()->sortBy('display_order');
        $projectStatuses = ProjectStatusCodeEnum::toSimpleArray();

        $skills = Skill::all()->sortBy('display_order');
        $skillTypes = SkillType::all();

        return Inertia::render('Cv', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register') && User::count() === 0,
            'experiences' => $experiences,
            'experienceTypes' => $experienceTypes,
            'projects' => $projects,
            'projectStatuses' => $projectStatuses,
            'skills' => $skills,
            'skillTypes' => $skillTypes,
        ]);
    }
}
