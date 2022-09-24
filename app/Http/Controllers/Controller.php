<?php

namespace App\Http\Controllers;

use App\Enums\ExperienceTypeCodeEnum;
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
        $experienceTypeJob = ExperienceType::where('code', ExperienceTypeCodeEnum::JOB->value)->first();
        $experienceTypeEducation = ExperienceType::where('code', ExperienceTypeCodeEnum::EDUCATION->value)->first();

        $jobs = Experience::where('experience_type_id', $experienceTypeJob->id)->get()->sortBy('display_order');
        $educations = Experience::where('experience_type_id', $experienceTypeEducation->id)->get()->sortBy('display_order');

        $projects = Project::all()->sortByDesc('status')->sortBy('display_order');
        $projectStatuses = ProjectStatusCodeEnum::toSimpleArray();

        $skills = Skill::all()->sortBy('display_order');
        $skillTypes = SkillType::all();

        return Inertia::render('Cv', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register') && User::count() === 0,
            'jobs' => $jobs,
            'educations' => $educations,
            'projects' => $projects,
            'projectStatuses' => $projectStatuses,
            'skills' => $skills,
            'skillTypes' => $skillTypes,
        ]);
    }
}
