<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): InertiaResponse|RedirectResponse
    {
        $contacts = Contact::all()->sortBy('display_order');

        return Inertia::render('Contact', [
            'contacts' => $contacts,
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
     * @param  StoreContactRequest  $request
     * @return Response
     */
    public function store(StoreContactRequest $request): Response
    {
        Contact::create($request->validated());

        return new JsonResponse();
    }

    /**
     * Display the specified resource.
     *
     * @param  Contact  $contact
     * @return Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Contact  $contact
     * @return Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateContactRequest  $request
     * @param  Contact  $contact
     * @return Response
     */
    public function update(UpdateContactRequest $request): Response
    {
        $contact = Contact::find($request->request->get('id'));
        $contact->update($request->validated());

        return new JsonResponse();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Contact  $contact
     * @return Response
     */
    public function destroy(int $id): Response
    {
        $contact = Contact::find($id);
        $contact->delete();

        return new JsonResponse();
    }
}
