<div class='artists'>
{{#each artists}}
    {{view App.ShowArtistView artistBinding="this"}}
{{/each}}
</div>