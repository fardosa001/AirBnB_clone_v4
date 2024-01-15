$(document).ready(function() {
    let amenityIDs = {};

    $('input[type="checkbox"]').change(function() {
        const amenityID = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).prop('checked')) {
            amenityIDs[amenityID] = amenityName;
        } else {
            delete amenityIDs[amenityID];
        }

        // Update h4 tag inside the div Amenities
        const amenitiesList = Object.values(amenityIDs).join(', ');
        $('#amenities-list').text(amenitiesList);
    });
});
