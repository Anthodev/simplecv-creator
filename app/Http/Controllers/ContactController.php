<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

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
    public function store(StoreContactRequest $request): Response|RedirectResponse
    {
        Contact::create($request->validated());

        return back()->with('flash', [
            'message' => 'success',
        ]);
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
    public function update(UpdateContactRequest $request): Response|RedirectResponse
    {
        $contact = Contact::find($request->request->get('id'));
        $contact->update($request->validated());

        return back()->with('flash', [
            'message' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Contact  $contact
     * @return Response
     */
    public function destroy(int $id): Response|RedirectResponse
    {
        $contact = Contact::find($id);
        $contact->delete();

        return back()->with('flash', [
            'message' => 'success',
        ]);
    }
}
