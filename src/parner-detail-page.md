---
layout: default
pagination:
    data: partners.data
    size: 1
    alias: partner
    addAllPagesToCollections: true
permalink: "/partner/{{partner.attributes.companyName | slugify}}/"
eleventyComputed:
    title: "Partner {{partner.attributes.companyName}}"
    description: "{{partner.attributes.companyShortDescription}}"
---
<div class="py-4 border-b border-gray-800">
    <div class="max-w-screen-xl px-8 mx-auto md:px-4">
        <a href="/partners" class="button-secondary">Back to overview</a>
    </div>
</div>
<div class="pt-12 pb-32">
    <div class="max-w-screen-xl grid-cols-12 gap-6 px-8 mx-auto md:px-4 md:grid items-start">
        <div class="col-span-8 mb-12 md:pr-24 md:mb-0">
            {% if partner.attributes.spotlightPartnerLink %}
            <a href="{{partner.attributes.spotlightPartnerLink}}" class="inline-block w-full p-1 mb-8 bg-gradient-to-r from-primary to-secondary group rounded-2xl">
                <div class="items-center w-full gap-4 overflow-hidden transition-colors bg-gray-950 md:flex rounded-2xl group-hover:bg-gray-900">
                    {% image "./src/static/images/glas/stack.png", "Sleap.io", "flex-shrink-0", "w-full h-32 md:w-auto object-cover" %}
                    <div class="w-full p-6 lg:p-8">
                        <div class="mb-2 font-bold uppercase text-primary">Learn more</div>
                        <div class="text-2xl font-medium lg:text-4xl font-headline">Builder Spotlight: {{partner.attributes.companyName}}</div>
                    </div>
                </div>
            </a>
            {% endif %}
            <h2 class="mb-6 text-3xl font-medium font-headline md:text-4xl">
                {{partner.attributes.companyName}}
            </h2>
            {% if partner.attributes.isConsortiumMember %}
            <div class="inline-block px-3 py-2 font-medium bg-gradient-to-r bg-accent rounded-bl-2xl rounded-tr-2xl text-gray-950">Validator of Camino Network</div>
            {% endif %}
            <p class="my-6 text-sm text-gray-200 md:text-base">
                {{partner.attributes.companyShortDescription}}
            </p>
            <div class="relative flex flex-wrap w-full mb-4 overflow-hidden">
                {% for a in partner.attributes.business_fields.data %}
                {% set b = a.attributes %}
                <span class="px-3 py-2 mb-2 mr-1 text-sm border block border-gray-700 rounded-full whitespace-nowrap">{{b.BusinessField}}</span>
                {% endfor %}
            </div>
            <hr class="border border-gray-700">
            <div class="mt-4 text-xl font-medium font-headline md:text-2xl">
                Description
            </div>
            <p class="mt-4 text-sm text-gray-200 md:text-base">
                {{partner.attributes.companyLongDescription}} 
            </p>
        </div>
        <div class="col-span-4 overflow-hidden border border-gray-800 rounded-3xl">
            <div class="w-full p-2 border-b border-gray-800 md:p-4 bg-caminoSky">
                <img class="object-contain w-auto max-w-[200px] h-24 mb-2 mx-auto" src="https://api.strapi.camino.network/{{partner.attributes.companyLogoColor.data.attributes.url}}" alt="{{x.companyName}} - Logo">
            </div>
            <div class="w-full p-2 border-b border-gray-800 md:p-4">
                <div class="mb-1 text-xs text-gray-400 uppercase">Company country</div>
                {{partner.attributes.companyCountry}}
            </div>
            <div class="w-full p-2 border-b border-gray-800 md:p-4">
                <div class="mb-1 text-xs text-gray-400 uppercase">Direct contact</div>
                {{partner.attributes.contactFirstname}}
                {{partner.attributes.contactLastname}}
            </div>
            <div class="w-full p-2 md:p-4">
                <div class="mb-1 text-xs text-gray-400 uppercase">
                    Company links
                </div>
                <div class="flex -mx-2">
                    {% if partner.attributes.companyLinkedin %}
                        <a class="block p-2 hover:bg-gray-800 rounded-xl" href="{{partner.attributes.companyLinkedin}}"><svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11v5m8 0v-3c0-.667-.4-2-2-2s-2 1.333-2 2m0 3v-3m0 0v-2M8 8h.01M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"/></svg></a>
                    {% endif %}
                    {% if partner.attributes.companyTwitter %}
                        <a class="block p-2 hover:bg-gray-800 rounded-xl" href="{{partner.attributes.companyTwitter}}"><svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 20 6.857-6.857m0 0L16 20h4l-6.857-9.143m-2.286 2.286L4 4h4l5.143 6.857m0 0L20 4"/></svg></a>
                    {% endif %}
                    {% if partner.attributes.contactEmail %}
                        <a class="block p-2 hover:bg-gray-800 rounded-xl" href="mailto:{{partner.attributes.contactEmail}}"><svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 9 3.75 3a2 2 0 0 0 2.5 0L17 9M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg></a>
                    {% endif %}
                    {% if partner.attributes.companyWebsite %}
                        <a class="block p-2 hover:bg-gray-800 rounded-xl" href="{{partner.attributes.companyWebsite}}" target="_blank" rel="noopener noreferrer"><svg class="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 0 1-8.5-6.034M12 21a9.004 9.004 0 0 0 8.5-6.034M12 21c4.97-4.97 4.97-13.03 0-18m0 18C7.03 16.03 7.03 7.97 12 3m0 0a9 9 0 0 0-8.5 6.035M12 3a9.004 9.004 0 0 1 8.5 6.035m0 0c.324.928.5 1.926.5 2.965a8.988 8.988 0 0 1-.5 2.966m0-5.931h-17m0 0A8.987 8.987 0 0 0 3 12a8.99 8.99 0 0 0 .5 2.966m0 0h17"/></svg></a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>

